class ChangePacks < ActiveRecord::Migration[5.2]
  def change
    remove_index :packs, :category
  end
end
