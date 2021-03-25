@packs.map do |pack|
    json.set! pack.id do
        json.partial! 'pack', pack: pack
        json.medIds []
    end
end