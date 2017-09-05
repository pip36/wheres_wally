class RemoveTimeColumn < ActiveRecord::Migration[5.0]
  def change
    remove_column :scores, :time
  end
end
