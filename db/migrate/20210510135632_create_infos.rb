class CreateInfos < ActiveRecord::Migration[6.1]
  def change
    create_table :infos do |t|
      t.string :first_name
      t.string :last_name
      t.string :email

      t.timestamps
    end
  end
end
