class CreateMeditationPacks < ActiveRecord::Migration[5.2]
  def change
    create_table :meditation_packs do |t|
      t.integer :pack_id, null: false
      t.integer :meditation_id, null: false

      t.timestamps
    end
    add_index :meditation_packs, :pack_id, unique: true
    add_index :meditation_packs, :meditation_id, unique: true
  end
end
