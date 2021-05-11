medIds = []
if !@flag
    @packs.each do |pack|
        json.set! pack.id do
            json.partial! 'pack', pack: pack
            @pack_meds.each do |packId, medArr|
                if pack.id == packId
                    json.medIds medArr
                end
            end
            # json.medIds @pack_meds
        end
    end
elsif @flag == 'custom'
    @packs.each do |pack|
        if pack.custom == true
            json.set! pack.id do
                json.partial! 'pack', pack: pack
                json.set! :medIds, medIds
            end
        end
    end
end

