class CreateUserMeditations < ActiveRecord::Migration[5.2]
  def change
    create_table :completed_meditations do |t|
      t.integer :user_id, null: false
      t.integer :meditation_id, null: false
      t.boolean :completed, null: false 
    end

    add_index :completed_meditations, :user_id, unique: true
    add_index :completed_meditations, :meditation_id, unique: true
  end
end
