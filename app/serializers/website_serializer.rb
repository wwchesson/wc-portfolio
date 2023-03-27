class WebsiteSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :address, :description, :gif, :technologies
end
