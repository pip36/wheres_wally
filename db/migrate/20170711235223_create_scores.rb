class CreateScores < ActiveRecord::Migration[5.0]
  def change
    create_table :scores do |t|
      t.string :name
      t.float :time
      t.references :image, foreign_key: true

      t.timestamps
    end
  end
end
