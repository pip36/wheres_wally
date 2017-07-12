class ChangeTimeFormatInScores < ActiveRecord::Migration[5.0]
  def change
    change_column :scores, :time, :string
  end
end
