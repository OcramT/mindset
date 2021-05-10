medIds = []
if !@flag
    @packs.each do |pack|
        json.set! pack.id do
            json.partial! 'pack', pack: pack
            medIds = []
            @pack_meds.each do |meditation|
                json.medIds medIds.push(meditation.id)
            end
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

