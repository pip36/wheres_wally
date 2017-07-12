class Score < ApplicationRecord
  belongs_to :image

  validates :name, presence: true
  validates :time, presence: true

  default_scope {order(time: :asc)}
end
