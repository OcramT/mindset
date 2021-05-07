class RemoveCompletedMeditationIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :completed_meditations, :user_id
  end
end
