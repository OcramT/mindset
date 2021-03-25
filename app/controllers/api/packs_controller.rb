class Api::PacksController < ApplicationController

    def index
        @packs = Pack.all
        @meditations = Meditation.all
    end

    def show
        @pack = Pack.find_by(id: params[:id])
        @meditations = Meditation.all
        if @pack 
            render 'api/packs/show'
        else
            render json: ['That pack does not exist!'], status: 404
        end
    end

    private

    def pack_params
        params.require(:pack).permit(:name, :category)
    end

end
