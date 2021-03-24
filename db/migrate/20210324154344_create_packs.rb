class CreatePacks < ActiveRecord::Migration[5.2]
  def change
    create_table :packs do |t|
      t.string :name, null: false
      t.string :category, null: false

      t.timestamps
    end
    add_index :packs, :name, unique: true
    add_index :packs, :category, unique: true
  end
end
