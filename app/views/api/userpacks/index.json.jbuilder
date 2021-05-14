# json.userpacks @packs

# json.userpacks do
#     @packs.map do |pack|
#         json.extract! pack, :id, :name, :category, :custom, :description
#     end
# end

# json.userPacks do
    @packs.each do |pack|
        # if pack.custom == true
        json.set! pack.id do
            json.extract! pack, :id, :name, :category, :custom, :description
            @userpack_meds.each do |packId, medArr|
                if pack.id == packId
                    json.medIds medArr
                end
            end
        end
        # end
    end
# end