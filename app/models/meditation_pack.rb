class MeditationPack < ApplicationRecord
    validates :meditation_id, uniqueness: { scope: :pack_id }
 
    belongs_to :meditation,
        primary_key: :id, 
        foreign_key: :meditation_id,
        class_name: :Meditation

    belongs_to :pack,
        primary_key: :id,
        foreign_key: :pack_id,
        class_name: :Pack

end
