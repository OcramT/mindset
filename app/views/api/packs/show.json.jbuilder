medIds = []
if !@pack.custom

    json.set! :pack do
        json.partial! 'pack', pack: @pack
        @meditations.each do |meditation|
            if meditation.category == @pack.category
                json.medIds medIds.push(meditation.id)
            end
        end
    end
end

if @pack.custom == true

    json.set! :pack do
        json.partial! 'pack', pack: @pack
        json.set! :medIds, @medIds
        # json.partial! 'pack', pack: @pack

    end
end
