class AddPackCustomConstraint < ActiveRecord::Migration[5.2]
  def change
    change_column_null :packs, :custom, false
  end
end
