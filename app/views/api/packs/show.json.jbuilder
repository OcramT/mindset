medIds = []

json.set! :pack do
    json.partial! 'pack', pack: @pack
    @meditations.each do |meditation|
        if meditation.category == @pack.category
            json.medIds medIds.push(meditation.id)
        end
    end
end
