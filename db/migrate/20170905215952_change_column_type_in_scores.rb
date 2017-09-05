class ChangeColumnTypeInScores < ActiveRecord::Migration[5.0]
  def change
    change_column :scores, :time, :float
  end
end
