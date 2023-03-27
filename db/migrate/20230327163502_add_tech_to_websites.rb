class AddTechToWebsites < ActiveRecord::Migration[7.0]
  def change
    add_column :websites, :technologies, :string
    
  end
end
