class WebsiteSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :address, :description
end
