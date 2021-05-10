medIds = []
meds = []

json.set! :pack do
    json.partial! 'pack', pack: @pack
    if @pack_meds == []
        json.medIds medIds
        json.meds meds
    else
        @pack_meds.each do |meditation|
            json.medIds medIds.push(meditation.id)
            json.meds meds.push(meditation)
        end
    end
end

