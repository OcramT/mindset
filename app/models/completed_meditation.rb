class CompletedMeditation < ApplicationRecord
    validates :meditation_id, uniqueness: { scope: :user_id }
 
    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :meditation,
        primary_key: :id,
        foreign_key: :meditation_id,
        class_name: :Meditation

end