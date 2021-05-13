class RemoveUniqueUserPackIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :user_packs, :pack_id
  end
end
