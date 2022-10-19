class AddAttributeToWebsite < ActiveRecord::Migration[7.0]
  def change
    add_column :websites, :description, :string
  end
end
