class AddUserPackIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :user_packs, :pack_id, unique: true
  end
end
