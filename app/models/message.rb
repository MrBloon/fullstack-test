class Message < ApplicationRecord
  belongs_to :info
  validates :content, presence: true
end
