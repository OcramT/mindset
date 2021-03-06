class UserPack < ApplicationRecord
    validates :user_id, :pack_id, presence: true
    validates :pack_id, uniqueness: { scope: :user_id }
 
    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
    
    belongs_to :pack,
        primary_key: :id,
        foreign_key: :pack_id,
        class_name: :Pack

end