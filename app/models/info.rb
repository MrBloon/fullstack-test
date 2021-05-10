class Info < ApplicationRecord
  has_many :messages
  validates :first_name, presence: true
  validates :last_name, presence: true
end
