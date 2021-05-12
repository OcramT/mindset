medIds = []
# if !@flag
#     @packs.each do |pack|
#         json.set! pack.id do
#             json.partial! 'pack', pack: pack
#             @all_pack_meds.each do |packId, medArr|
#                 if pack.id == packId
#                     json.medIds medArr
#                 end
#             end
#         end
#     end
# elsif @flag == 'custom'
#     @packs.each do |pack|
#         if pack.custom == true
#             json.set! pack.id do
#                 json.partial! 'pack', pack: pack
#                 json.set! :medIds, @pack_meds
#             end
#         end
#     end
# end

if !@flag
    @packs.each do |pack|
        json.set! pack.id do
            json.partial! 'pack', pack: pack
            @all_pack_meds.each do |packId, medArr|
                if pack.id == packId
                    json.medIds medArr
                end
            end
        end
    end
elsif @flag == 'custom'
    @packs.each do |pack|
        if pack.custom == true
            json.set! pack.id do
            json.partial! 'pack', pack: pack
            @all_pack_meds.each do |packId, medArr|
                if pack.id == packId
                    json.medIds medArr
                end
            end
        end
        end
    end
end

