class Meditation < ApplicationRecord
    validates :title, :category, :duration, presence: true
    validates :title, :url, uniqueness: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :pack, 
        primary_key: :id, 
        foreign_key: :pack_id,
        class_name: :Pack

end
