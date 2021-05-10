class RemoveIndexMeditationPacks < ActiveRecord::Migration[5.2]
  def change
    remove_index :meditation_packs, :meditation_id
    remove_index :meditation_packs, :pack_id
  end
end
