class MeditationPack < ApplicationRecord
 
    belongs_to :meditation,
        primary_key: :id, 
        foreign_key: :meditation_id,
        class_name: :Meditation

    belongs_to :pack,
        primary_key: :id,
        foreign_key: :pack_id,
        class_name: :Pack

end
