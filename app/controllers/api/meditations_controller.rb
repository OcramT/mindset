class Api::MeditationsController < ApplicationController

    def index
        @meditations = Meditation.all
        @flag = params[:flag]
        if @flag == 'all'
            render 'api/meditations/all'
        end
    end

    def show
        @meditation = Meditation.find_by(id: params[:id])
        if @meditation 
            render 'api/meditations/show'
        else
            render json: ['That meditation does not exist!'], status: 404
        end
    end

    def destroy
        @meditation = MeditationPack.find_by(pack_id: params[:packId], meditation_id: params[:medId])
        @meditation.destroy
    end

    private

    def meditation_params
        params.require(:meditation).permit(:title, :category, :url, :duration, :flag, :medId, :packId)
    end
end
