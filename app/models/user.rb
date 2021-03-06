class User < ApplicationRecord
    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true

    attr_reader :password

    after_initialize :ensure_session_token

    has_many :completed_meditations, -> {distinct},
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :CompletedMeditation

    has_many :user_packs, -> {distinct},
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :UserPack

    has_many :custom_packs,
        through: :user_packs,
        source: :meditation

    has_many :meditations,
        through: :completed_meditations,
        source: :meditation

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        pass_check = BCrypt::Password.new(self.password_digest)
        pass_check.is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def self.find_by_credentials(username, password)
        @user = User.find_by(username: username)
        return nil unless @user
        @user.is_password?(password) ? @user : nil
    end

    private

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

end
