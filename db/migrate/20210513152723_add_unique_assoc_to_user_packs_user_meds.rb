class AddUniqueAssocToUserPacksUserMeds < ActiveRecord::Migration[5.2]
  def change
    add_index :user_packs, [:user_id, :pack_id], unique: true
    add_index :completed_meditations, [:user_id, :meditation_id], unique: true
    remove_index :completed_meditations, :meditation_id
  end
end
