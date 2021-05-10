class AddUniqueAssocToMedPacks < ActiveRecord::Migration[5.2]
  def change
    add_index :meditation_packs, [:meditation_id, :pack_id], unique: true
  end
end
