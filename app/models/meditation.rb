class Meditation < ApplicationRecord
    validates :title, :category, :duration, presence: true
    validates :title, :url, uniqueness: true

    has_many :meditation_packs,
        primary_key: :id,
        foreign_key: :meditation_id,
        class_name: :MeditationPack

    has_many :completed_meditations,
        primary_key: :id,
        foreign_key: :meditation_id,
        class_name: :CompletedMeditation

    has_many :meditation_users,
        through: :completed_meditations,
        source: :user


end
