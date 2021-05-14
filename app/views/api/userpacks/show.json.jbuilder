# json.partial! 'api/userpacks/userpack', userpack: @userpack
# json.set! @pack.id do
    json.extract! @pack, :id, :name, :category, :custom, :description
# end