@packs.each do |pack|
    json.set! pack.id do
        json.partial! 'pack', pack: pack
        medIds = []
        @meditations.each do |meditation|
            if meditation.category == pack.category
                json.medIds medIds.push(meditation.id)
            end
        end
    end
end