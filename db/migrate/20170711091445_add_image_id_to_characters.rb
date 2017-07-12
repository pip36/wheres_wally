class AddImageIdToCharacters < ActiveRecord::Migration[5.0]
  def change
    add_reference :characters, :image, foreign_key: true
  end
end
