json.extract! produit, :id, :nom, :description, :created_at, :updated_at
json.url produit_url(produit, format: :json)
