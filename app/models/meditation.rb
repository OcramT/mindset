class Meditation < ApplicationRecord
    validates :title, :category, :duration, presence: true
    validates :title, :url, uniqueness: true
end
