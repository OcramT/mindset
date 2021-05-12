class Pack < ApplicationRecord
    validates :name, :category, presence: true
    validates :name, uniqueness: true
    
    has_many :meditation_packs, dependent: :destroy,
        primary_key: :id,
        foreign_key: :pack_id,
        class_name: :MeditationPack

    has_many :user_packs, dependent: :destroy,
        primary_key: :id,
        foreign_key: :pack_id,
        class_name: :UserPack

    has_many :users,
        through: :user_packs,
        source: :user

    has_many :meditations, -> {distinct},
        through: :meditation_packs,
        source: :meditation

end
