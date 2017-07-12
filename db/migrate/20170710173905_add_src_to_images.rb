class AddSrcToImages < ActiveRecord::Migration[5.0]
  def change
    add_column :images, :src, :string
  end
end
