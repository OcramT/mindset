class AddColumnPacks < ActiveRecord::Migration[5.2]
  def change
    add_column :packs, :custom, :boolean
    add_column :packs, :description, :text
  end
end
