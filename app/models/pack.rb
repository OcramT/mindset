class Pack < ApplicationRecord
    validates :name, :category, presence: true
    validates :name, :category, uniqueness: true
    
    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
    
    has_many :meditations,
        primary_key: :id,
        foreign_key: :pack_id,
        class_name: :Meditation

end
