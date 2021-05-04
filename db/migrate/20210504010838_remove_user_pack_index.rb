class RemoveUserPackIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :user_packs, :user_id
    remove_index :user_packs, :pack_id
  end
end
