class AddTimeColumn < ActiveRecord::Migration[5.0]
  def change
    add_column :scores, :time, :float
  end
end
