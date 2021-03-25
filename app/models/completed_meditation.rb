class CompletedMeditation < ApplicationRecord
 
    belongs_to :meditation,
        primary_key: :id,
        foreign_key: :meditation_id,
        class_name: :Meditation
    
    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

end