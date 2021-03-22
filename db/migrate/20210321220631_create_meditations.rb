class CreateMeditations < ActiveRecord::Migration[5.2]
  def change
    create_table :meditations do |t|
      t.string :title, null: false, unique: true
      t.string :category, null: false
      t.string :url, unique: true
      t.integer :duration, null: false

      t.timestamps
    end

  end
end
