class AddColumnToWebsites < ActiveRecord::Migration[7.0]
  def change
    add_column :websites, :gif, :string
  end
end
